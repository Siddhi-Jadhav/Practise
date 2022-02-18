import { UserEntity } from './../user/user.entity';
import { SearchTaskDTO } from './dto/search.task.dto';
import { CreateTaskDTO } from './dto/create.task.dto';
import { TaskEntity } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { TaskStatus } from './task.model';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  async getTasks(searchTaskDto: SearchTaskDTO, user: UserEntity) {
    // get the search parameter and status value
    const { search, status } = searchTaskDto;

    //select * from task where title like '%{search}%' or description like '%{search}%'
    //create a query builder
    const query = this.createQueryBuilder('task');
    //search by status
    if (status) {
      query.andWhere('task.status = :status', { status: status });
    }
    //search by title and description
    if (search) {
      query.andWhere(
        '(task.title LIKE :search) or (task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    //add the user id
    query.andWhere(`task.userId = userId`, { userId: user.id });

    //execute the query
    return await query.getMany();
  }

  async createTasks(createTaskDto: CreateTaskDTO, user: UserEntity) {
    //create a row in the Task (TaskEntity)
    const task = new TaskEntity();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = TaskStatus.OPEN;

    //the logged in user will own the task
    task.user = user;
    //create a new row in task table
    await task.save();

    return task;
  }
}

import { UserEntity } from './../user/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { SearchTaskDTO } from './dto/search.task.dto';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create.task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskStatus } from './task.model';
import { GetUser } from 'src/user/get.user.decorator';

@Controller('task')
@UseGuards(AuthGuard())
export class TaskController {
  //dependency injection
  //TaskController is dependent on TaskService
  constructor(private taskService: TaskService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @GetUser() user: UserEntity,
    @Body() createTaskDto: CreateTaskDTO,
  ) {
    //1. create new task
    //2. return all task
    return this.taskService.createTask(createTaskDto, user);
  }

  @Get()
  getTasks(@Query() searchTaskDto: SearchTaskDTO, user: UserEntity) {
    console.log(searchTaskDto);
    return this.taskService.getTasks(searchTaskDto, user);
  }
  /*@Get('/:search')
  getTask(@Param('search') search: string) {
    const searchTaskDto = {
      search: search,
      status: TaskStatus.IN_PROGRESS,
    };
    return this.taskService.getTasks(searchTaskDto);
  }*/

  @Patch('/:id/:status')
  updateTaskStatus(
    @GetUser() user: UserEntity,
    @Param('id') id: string,
    @Param('status') status: TaskStatus,
  ) {
    return this.taskService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTask(@GetUser() user: UserEntity, @Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
  // changeStatus() {}
}

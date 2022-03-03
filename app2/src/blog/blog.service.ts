import { UpdateBlogDTO } from './dto/update.blog.dto';
import { UserEntity } from '../user/user.entity';
import { BlogRepository } from './blog.repository';
import { SearchBlogDTO } from './dto/search.blog.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDTO } from './dto/create.blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BlogService {
  constructor(
    //add the dependency for blog repository
    //we can inject the BlogRepository into the BlogService using the @InjectRepository() decorator
    @InjectRepository(BlogRepository)
    private blogRepository: BlogRepository,
  ) {}

  async getBlogs(searchBlogDto: SearchBlogDTO) {
    return this.blogRepository.getBlogs(searchBlogDto);
  }

  //create a new blog
  async createBlog(createBlogDto: CreateBlogDTO, user: UserEntity) {
    //get a new row created for the blog
    return this.blogRepository.createBlog(createBlogDto, user);
  }

  async updateBlog(updateBlogDto: UpdateBlogDTO, user: UserEntity, id) {
    const blog = await this.blogRepository.updateBlog(updateBlogDto, user, id);
    if (!blog) {
      throw new NotFoundException('BLOG NOT FOUND');
    }
    //await blog.save();
    return blog;
  }

  async deleteBlog(id: string, user: UserEntity) {
    //try deleting the blog with id
    const result = await this.blogRepository.delete(id);

    //if affected rows are > 0 ---> success
    if (result.affected == 0) {
      throw new NotFoundException('blog not found');
    }

    return result;
  }
}

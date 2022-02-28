import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { SearchBlogDTO } from './dto/search.blog.dto';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dto/create.blog.dto';
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
import { GetUser } from 'src/user/get.user.decorator';

@Controller('blog')
@UseGuards(AuthGuard())
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlog(
    @GetUser() user: UserEntity,
    @Body() createBlogDto: CreateBlogDTO,
  ) {
    return this.blogService.createBlog(createBlogDto, user);
  }

  @Get()
  getBlogs(@GetUser() user: UserEntity, @Query() searchBlogDto: SearchBlogDTO) {
    console.log(searchBlogDto);
    return this.blogService.getBlogs(searchBlogDto, user);
  }

  @Delete('/:id')
  deleteTask(@GetUser() user: UserEntity, @Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}

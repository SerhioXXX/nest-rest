import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from '../../entities/user.entity';
import { UsersService } from '../../users.service';

@Crud({
    model: {
        type: User,
    },
})
@Controller('users')
export class UsersController implements CrudController<User> {
    constructor(public service: UsersService) { }
}
/*
Crud — это декоратор, добавляющий в контроллер необходимые методы для работы с моделью. Тип модели указывается в поле model.type конфигурации декоратора.
*/

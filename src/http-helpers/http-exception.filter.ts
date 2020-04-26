import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

import { Response } from 'express';

@Catch(EntityNotFoundError)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: EntityNotFoundError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();


        response
            .status(404)
            .json({
                statusCode: 404,
                message: 'No data was found',
            });
    }
}

import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

import { Response } from 'express';

@Catch(EntityNotFoundError, Error)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        
        if (exception instanceof EntityNotFoundError) {
            return response
                .status(404)
                .json({
                    statusCode: 404,
                    message: 'No data was found',
                });
        }

        if (exception.getStatus() === 400) {
            return response
                .status(400)
                .json({
                    message: 'Please provide a name and amount for each material',
                });
        }


    }
}

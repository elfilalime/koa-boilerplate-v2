export async function authentification(ctx, next) {
    /**
     *
     * check if header contains de X_authentification
     *
     */

    if (!ctx.request.header['x-access-token']) {
      ctx.status = 401 // unauthorized
      ctx.body = {
        message: 'X_auth unfound',
        err_code: 'X_AUTH_NOT_FOUND'
      }

      return ctx.body
    }

    await next()
 
}

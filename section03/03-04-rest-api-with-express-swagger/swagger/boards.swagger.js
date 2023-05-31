/**
 * @swagger
 * /boards:
 *  get:
 *      summary: get post list
 *      tags: [Board]
 *      parameters:
 *          - in: query
 *            name: number
 *            type: int
 *      responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  number:
 *                                      type: int
 *                                      example: 1
 *                                  writer:
 *                                      type: string
 *                                      example: asher
 *                                  title:
 *                                      type: string
 *                                      example: "dfdfdf"
 *                                  contents:
 *                                      type: string
 *                                      example: "dfdfdfdf"
 */

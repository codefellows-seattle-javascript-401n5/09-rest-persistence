'use strict';

let router = require('../../../src/lib/router.js');
let apis = require('../../../src/api/api');
let Notes = require('../../../src/models/notes');
describe('Router', () => {

  it('registers routes of multiple types', () => {
    //router.get('/api/v1/notes', () => true);
    //router.put('/api/v1/notes', () => true);
    router.post('/api/v1/notes', () => true);
    //router.delete('/api/v1/notes', () => true);
    expect( router.routes.GET['/api/v1/notes']).toBeDefined();
    //expect( router.routes.PUT['/']).toBeDefined();
    //expect( router.routes.POST['/']).toBeDefined();
    //expect( router.routes.DELETE['/']).toBeDefined();
    const mockNote = new Notes({title:'fake', content:'fake'});
    const id = mockNote.id;
    mockNote.save();
    
  });


  it('can create multiple routes of the same type', () => {
    router.routes.GET = {};
    router.get('/a', () => true);
    router.get('/b', () => true);
    router.get('/c', () => true);
    expect( Object.keys(router.routes.GET).length ).toEqual(3);
  });

  it('can route get requests', () => {
    let expected = 'get/test';
    router.get('/test', () => expected);
    let req = { method: 'GET', url: 'http://localhost/test?john=bald' };
    let res = {};
    return router.route(req,res)
      .then( result => expect(result).toEqual(expected));
  });


});

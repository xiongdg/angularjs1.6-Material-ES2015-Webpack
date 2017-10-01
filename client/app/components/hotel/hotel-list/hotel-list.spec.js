import hotelList from './hotel-list.module'
// import hotelListController from './hotel-list.controller';
import hotelListComponent from './hotel-list.component';
import hotelListTemplate from './hotel-list.html';

describe('hotelList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(hotelList));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new hotelListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(hotelListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = hotelListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(hotelListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(hotelListController);
    });
  });
});

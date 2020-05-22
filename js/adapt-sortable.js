define([
	'core/js/adapt',
	'./SortableView',
	'core/js/models/itemsQuestionModel'
  ], function(Adapt, SortableView, ItemsQuestionModel) {
  
	return Adapt.register("sortable", {
	  view: SortableView,
	  // Extend ItemsQuestionModel to distinguish SortableModel in
	  // the inheritance chain and allow targeted model extensions.
	  model: ItemsQuestionModel.extend({})
	});
  
  });
  
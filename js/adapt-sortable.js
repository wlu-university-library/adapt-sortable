define([
	'core/js/adapt',
	'./SortableView',
	'./SortableModel'
  ], function(Adapt, SortableView, SortableModel) {
  
	return Adapt.register("sortable", {
	  view: SortableView,
	  model: SortableModel
	});
  
  });
  
// import the plugin
import $ from 'jquery';
import 'select2';

// create the function
const initSelect2 = () => {
  const statesInput = $('#states');
  const options = { width: '100%' };
  statesInput.select2(options);
}

// export the function
export { initSelect2 };

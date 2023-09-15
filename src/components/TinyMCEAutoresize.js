import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/autoresize';
import 'tinymce/icons/default/icons';

const initTinyMCE = () => {
  tinymce.init({
    models: 'dom,base',
    selector: '#descriptionTextarea',
    plugins: 'autoresize',
    toolbar: false,
    menubar: false,
    autoresize_bottom_margin: 20,
    autoresize_min_height: 100,
  });
};

export default initTinyMCE;

function get(element) {
    return document.getElementById(element);
}

function openModal()
{
    var modal = get("modal-dialog");
    var backdrop = get("modal-backdrop");

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal()
{
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get("modal-dialog");
    var backdrop = get("modal-backdrop");

    title.value = '';
    text.value = '';

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent()
{
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newcontent = document.createElement('p');
    var newcontentText = document.createTextNode(text.value);
    
    newTitle.appendChild(newTitleText);
    newcontent.appendChild(newcontentText);
    content.appendChild(newTitle);
    content.appendChild(newcontent);

    closeModal();
}

window.addEventListener('load', function() {
    var newbutton = get('new-button');
    var cancelbutton = get('cancel-button');
    var savebutton = get('save-button');

    newbutton.addEventListener('click', openModal);
    cancelbutton.addEventListener('click', closeModal);
    savebutton.addEventListener('click', saveContent);
});
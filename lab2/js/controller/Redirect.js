(() => {
    if (!localStorage.hasOwnProperty('sessionUser')) {
        document.location.href = 'login_form.html';
    }
})();
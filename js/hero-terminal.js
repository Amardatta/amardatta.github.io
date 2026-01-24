// Spinner -> success sequence for terminal-line
(function(){
    const textEl = document.getElementById('term-text');
    const spinnerEl = document.getElementById('term-spinner');
    const checkEl = document.getElementById('term-check');
    if(!textEl || !spinnerEl || !checkEl) return;

    // Now includes epoch, lr, train loss, and val loss
    const epoch = 4;
    const learningRate = 3e-4;
    const trainLoss = 0.113;
    const valLoss = 0.119;
    const deploying = `epoch ${epoch} | lr ${learningRate} | train loss: ${trainLoss} | val loss: ${valLoss} | training Neural Network...`;
    // Shorten success message on smaller screens to avoid long line
    function isMobile(){ return (window.matchMedia && window.matchMedia('(max-width: 992px)').matches); }
    function getSuccess(){ return isMobile() ? ' complete' : ' +12% CTR achieved'; }

    function showDeploy(){
        // show deploying text + spinner
        textEl.textContent = deploying;
        spinnerEl.style.display = 'inline-block';
        checkEl.style.display = 'none';
        // after short delay, show success
        setTimeout(showSuccess, 1600);
    }

    function showSuccess(){
        spinnerEl.style.display = 'none';
        checkEl.style.display = 'inline-block';
        textEl.textContent = deploying + getSuccess();
        // keep success visible, then loop
        setTimeout(()=>{
            // fade out then restart
            textEl.textContent = '';
            checkEl.style.display = 'none';
            setTimeout(showDeploy, 900);
        }, 2200);
    }

    // start loop after DOM is ready
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', showDeploy);
    } else {
        showDeploy();
    }
})();

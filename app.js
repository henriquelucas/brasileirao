
//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 1500;
ProgressBar.init(
  [ 'Configurar Domínio',
    'Received Responses',
    'Negotiation Done',
    'Hired Professional',
    'Service Completed'
  ],
  'Hired Professional',
  'progress-bar-wrapper' // created this optional parameter for container name (otherwise default container created)
);

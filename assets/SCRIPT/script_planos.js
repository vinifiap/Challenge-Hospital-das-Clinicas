document.getElementById('nurse-image').addEventListener('click', function(event) {
    var tooltip = document.getElementById('tooltip');
    if (tooltip.style.display === 'none') {
      tooltip.style.display = 'block';
      tooltip.style.top = event.pageY + 'px';
      tooltip.style.left = event.pageX + 'px';
      tooltip.innerHTML = `
        <strong>Plano de saúde: por que você precisa de um?</strong><br>
        Um plano de saúde é essencial para garantir acesso a cuidados médicos de qualidade, cobrindo consultas, exames, procedimentos e emergências, proporcionando segurança financeira diante de despesas médicas inesperadas. Além disso, oferece uma rede de profissionais e hospitais credenciados, reduzindo o tempo de espera por atendimento e possibilitando uma melhor gestão da saúde a longo prazo.<br>
        Aproveite e conheça melhor sobre como funciona um bom plano de saúde e confira dicas de saúde atualizadas, afinal, ter saúde é o que realmente interessa e se você se ama, se cuida com um bom plano, não é mesmo? Cuide bem de você e de quem você ama!
      `;
    } else {
      tooltip.style.display = 'none';
    }
  });


  function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'none') {
      // Hide any previously open content
      var contents = document.getElementsByClassName('content');
      for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
      }
      // Show the clicked content
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
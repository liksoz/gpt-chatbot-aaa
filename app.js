async function askGPT(question) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }]
    })
  });
  const data = await response.json();
  document.getElementById('chat').innerText = data.choices[0].message.content;
}

askGPT("안녕하세요! 무엇을 도와드릴까요?");

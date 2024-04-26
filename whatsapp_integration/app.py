from flask import Flask, request
from twilio.rest import Client
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# lembrar de salvar no .env

account_sid = os.getenv('ACCOUNT_SID')
auth_token = os.getenv('AUTH_TOKEN')
whatsapp_number = os.getenv('WHATSAPP_NUMBER')

client = Client(account_sid, auth_token)

@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    phone_number = data.get('phone_number')
    message_text = data.get('message')

    message = client.messages.create(
        from_ = whatsapp_number,
        body = message_text,
        to = f'whatsapp:{phone_number}'
    )

    return {"status": "success", "message_sid": message.sid}

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0', port = 5000) # rodar o servidor
import pickle
import json
import random

# load model
model = pickle.load(open("chatbot_model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

# load dataset
with open("intents.json") as file:
    intents = json.load(file)

def chatbot_response(message):

    X = vectorizer.transform([message])

    tag = model.predict(X)[0]

    for intent in intents["intents"]:
        if intent["tag"] == tag:
            return random.choice(intent["responses"])

    return "Sorry, I didn't understand."
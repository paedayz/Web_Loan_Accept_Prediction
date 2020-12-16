from flask import Flask, render_template, request
import pickle
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def predict() :
    if request.method == 'POST' :

        # spl = request.form['spl']
        # spw = request.form['spw']
        # ptl = request.form['ptl']
        # ptw = request.form['ptw']
        spl = 0.5
        spw = 1.5
        ptl = 2.5
        ptw = 4.0

        data = [[float(spl), float(spw), float(ptl), float(ptw)]]
        lr = pickle.load(open('iris.pkl', 'rb'))
        prediction = lr.predict(data)[0]
    
    return prediction

if __name__ == '__main__' :
    app.run()
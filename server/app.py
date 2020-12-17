from flask import Flask, render_template, request
import pickle
from sklearn.linear_model import LogisticRegression
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['POST'])
def predict() :
    if request.method == 'POST' :
        data = request.get_json()
        # spl = request.form['spl']
        # spw = request.form['spw']
        # ptl = request.form['ptl']
        # ptw = request.form['ptw']
        # spl = 0.5
        # spw = 1.5
        # ptl = 2.5
        # ptw = 4.0

        Gender = data['Gender']
        Married = data['Married']
        Dependents = data['Dependents']
        Education = data['Education']
        Self_Employed = data['Self_Employed']
        ApplicantIncome = data['ApplicantIncome']
        CoapplicantIncome = data['CoapplicantIncome']
        LoanAmount = data['LoanAmount']
        Loan_Amount_Term = data['Loan_Amount_Term']
        Credit_History = data['Credit_History']
        Property_Area = data['Property_Area']

        # data = [[float(spl), float(spw), float(ptl), float(ptw)]]
        predict_data = [[float(Gender), float(Married), float(Dependents), float(Education), float(Self_Employed), float(ApplicantIncome), 
                float(CoapplicantIncome), float(LoanAmount), float(Loan_Amount_Term), float(Credit_History), float(Property_Area)]]

        lr = pickle.load(open('loan.pkl', 'rb'))
        prediction = lr.predict(predict_data)[0]
    
    return str(prediction)

if __name__ == '__main__' :
    app.run()
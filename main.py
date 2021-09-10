from flask import Flask,  app, render_template, request
import math



from py_files.mechanic.kinematic import kinematic



app = Flask (__name__)


app.register_blueprint(kinematic, url_prefix="")







#უპოვნელ გვერდე გამოაქ 404 დაკარგული ნიშანი
@app.errorhandler(404)
def not_found_page(e):
    return render_template ('404.html'), 404


@app.route('/')
def fist_page():
    return render_template ('first.html')


@app.route('/calculator')
def calculator():
    return render_template ('choose.html' )


@app.route('/conventer')
def conventer_lounch():
    return render_template ('convert.html' )


@app.route('/calculator/mechanic')
def mechanic():
    return render_template ('/mechanic/mechanic.html')


@app.route('/calculator/mechanic/kinematika')
def kinematika():
    return render_template ('/mechanic/kinematika/kinematika.html')


@app.route('/calculator/mechanic/kinematika/fallen')
def fallen():
    return render_template ('/mechanic/kinematika/fallen/fallen.html')


@app.route('/calculator/mechanic/kinematika/gasrolili')
def gasrolili():
    return render_template ('/mechanic/kinematika/gasrolili/gasrolili.html')


@app.route('/calculator/mechanic/kinematika/asrolili')
def asrolili():
    return render_template ('/mechanic/kinematika/asrolili/asrolili.html')


@app.route('/calculator/mechanic/kinematika/height_gasrolili')
def height_gasrolili():
    return render_template ('/mechanic/kinematika/height_gasrolili/height_gasrolili.html')


@app.route('/calculator/mechanic/kinematika/angle_fall')
def angle_fall():
    return render_template ('/mechanic/kinematika/chamosrolili/angle_fall.html')






if __name__ == '__main__':
    app.run (debug=True)
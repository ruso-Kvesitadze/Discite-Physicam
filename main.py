from flask import Flask,  app, render_template, request


import math


app = Flask (__name__)


facebook="https://www.facebook.com/DiscitePhysicam"
web_app="Discite Physicam"





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









###################################################### ვარდნილი სხეული დასაწყისი ######################################################
###################################################### ვარდნილი სხეული დასაწყისი ######################################################
###################################################### ვარდნილი სხეული დასაწყისი ######################################################
###################################################### ვარდნილი სხეული დასაწყისი ######################################################



#----------------------------------------------------------ითვლის დაცემის დრო ----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/time/calculate')
def time_calculate_fallen():
    return render_template ('/mechanic/kinematika/fallen/time_calculate.html')


@app.route('/calculator/mechanic/kinematika/fallen/time/' ,  methods=['GET','POST'])
def get_value_time_fallen():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']


    if choose=='სიმაღლე' and gravity>0 and selectable>=0 and velocity>=0:
        time=(math.sqrt((velocity**2)+2*gravity*selectable)-velocity)/gravity
        time=round(time,2)
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time=time ,Dimension='წმ')

    elif choose=='მყისი სიჩქარე' and gravity>0 and velocity<=selectable and velocity>=0 :
        time=(selectable-velocity)/gravity
        time=round(time,2)
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time=time, Dimension='წმ' )

    else:
        return render_template ('/mechanic/kinematika/fallen/time_calculate.html' , time='მოცემული მოძრაობა შეუძლებელია' )











#----------------------------------------------------------ითვლის მომენტალურ სიჩქარეს----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/instant_velocity/calculate')
def fallen_inst_velocity():
    return render_template ('/mechanic/kinematika/fallen/instant_velocity.html')


@app.route('/calculator/mechanic/kinematika/fallen/instant_velocity/' ,  methods=['GET','POST'])
def get_value_fallem_inst_velocity():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']

    if choose=='ვარდნის დრო' and gravity>0 and velocity>=0:
        instant_velocity=velocity+gravity*selectable
        instant_velocity=round(instant_velocity,2)

        return render_template ('/mechanic/kinematika/fallen/instant_velocity.html' , velocity=instant_velocity ,Dimension='მ/წმ')

    elif choose=='სიმაღლე' and gravity>0 and selectable>=0 and velocity>=0:
        instant_velocity=math.sqrt((2*gravity*selectable)+velocity**2)
        instant_velocity=round(instant_velocity,2)

        return render_template ('/mechanic/kinematika/fallen/instant_velocity.html' ,  velocity=instant_velocity ,Dimension='მ/წმ')
    else:
        return render_template ('/mechanic/kinematika/fallen/instant_velocity.html' , velocity='მოცემული მოძრაობა შეუძლებელია' )











#----------------------------------------------------------ითვლის ვარდნის სიმაღლეს----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/height/calculate')
def fallen_height():
    return render_template ('/mechanic/kinematika/fallen/height.html')


@app.route('/calculator/mechanic/kinematika/fallen/height/' ,  methods=['GET','POST'])
def get_value_fallem_fallen_height():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    selectable=float(request.form['selectable'])
    choose=request.form['select']
    

    if choose=='ვარდნის დრო' and gravity>0 and velocity>=0:
        height=(velocity*selectable)+(gravity*selectable**2)/2
        height=round(height,2)
        return render_template ('/mechanic/kinematika/fallen/height.html' , height=height ,Dimension='მ')

    elif choose=='მყისი სიჩქარე' and gravity>0 and velocity>=0:
        height=((selectable**2)-velocity**2)/(2*gravity)
        height=round(height,2)
        return render_template ('/mechanic/kinematika/fallen/height.html' , height=height ,Dimension='მ')

    else:
        return render_template ('/mechanic/kinematika/fallen/height.html' , height='მოცემული მოძრაობა შეუძლებელია' )












#----------------------------------------------------------ითვლის საწყის სიჩქარეს----------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/initial_velocity/calculate')
def fallen_velocity_0():
    return render_template('/mechanic/kinematika/fallen/initial_velocity.html')


@app.route('/calculator/mechanic/kinematika/fallen/initial_velocity/' ,  methods=['GET','POST'])
def get_value_fallem_velocity_0():
    gravity=float(request.form['gravity'])
    height=float(request.form['selectable'])
    user_choose=float(request.form['selectable2'])
    choose2=request.form['select_second']
    choose=request.form['select']


    if choose=="ვარდნის დრო" and choose2=="სიმაღლე" and gravity>0 and user_choose>0:
        velocity_0= (2*height-gravity*user_choose**2)/(2*user_choose)
        velocity_0=round(velocity_0,2)
        if velocity_0>=0:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity=velocity_0 ,Dimension='მ/წმ')
        else:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity='სხეული თავდაპირველად ზევით მოძრაობს')

    elif choose=="საბოლოო სიჩქარე"and choose2=="სიმაღლე" and gravity>0 and user_choose>0 and (user_choose**2)>=2*gravity*height:
        velocity_0=math.sqrt((user_choose**2)-2*gravity*height)
        velocity_0=round(velocity_0,2)
        return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity=velocity_0 ,Dimension='მ/წმ')

    elif choose=="ვარდნის დრო"and choose2=="საბოლოო სიჩქარე" and gravity>0 and user_choose>0:
        velocity_0=height-gravity*user_choose
        velocity_0=round(velocity_0,2)
        if velocity_0>=0:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity=velocity_0 ,Dimension='მ/წმ')
        else:
            return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity='სხეული თავდაპირველად ზევით მოძრაობს')

    else:
        return render_template('/mechanic/kinematika/fallen/initial_velocity.html' , initial_velocity='მოცემული მოძრაობა შეუძლებელია')










#-------------------------------------------------------ითვლის მე-n წამში გავლილი მანძილს--------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/in_n_time_dist/calculate')
def fallen_in_n_time_dist():
    return render_template ('/mechanic/kinematika/fallen/in_n_time_dist.html')


@app.route('/calculator/mechanic/kinematika/fallen/in_n_time_dist/' ,  methods=['GET','POST'])
def get_value_in_n_time_dist():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_time'])

  
    if gravity>0 and last_n>0:
        height=velocity + ((2*last_n)-1)*gravity/2
        height= round(height , 2)
        return render_template ('/mechanic/kinematika/fallen/in_n_time_dist.html' , distance=height ,Dimension='მ')

    elif last_n<=0 or gravity==0 :
        return render_template ('/mechanic/kinematika/fallen/in_n_time_dist.html' , distance="შეუძლებელია")










#-------------------------------------------------------ითვლის მე-n მეტრის გავლილის დროს--------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/in_n_meter_time/calculate')
def fallen_in_n_metre_time():
    return render_template ('/mechanic/kinematika/fallen/in_n_meter_time.html')


@app.route('/calculator/mechanic/kinematika/fallen/in_n_meter_time/' ,  methods=['GET','POST'])
def get_value_in_n_metre_time():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_time'])

  
    if last_n>0:
        time= (math.sqrt(2 * gravity * (last_n) + velocity**2) - math.sqrt(2 * gravity * (last_n-1) + velocity**2))/gravity
        time= round(time , 5)
        return render_template ('/mechanic/kinematika/fallen/in_n_meter_time.html' , time=time ,Dimension='წმ')
    else:
        return render_template ('/mechanic/kinematika/fallen/in_n_meter_time.html' , time="შეუძლებელია" )










#------------------------------------------------------ითვლის ბოლო n-მეტრის გავლის დროს------------------------------------------------------
@app.route('/calculator/mechanic/kinematika/fallen/last_n_meter_time/calculate')
def fallen_last_n_metre_time():
    return render_template('/mechanic/kinematika/fallen/last_n_meter_time.html')


@app.route('/calculator/mechanic/kinematika/fallen/last_n_meter_time/' ,  methods=['GET','POST'])
def get_value_last_n_metre_time():
    gravity=float(request.form['gravity'])
    height=float(request.form['height'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_meter'])
  

    if height>=last_n:
        time=( math.sqrt((2*gravity*height) + velocity**2) - math.sqrt(2*gravity*(height-last_n)+velocity**2) )/gravity
        time= round(time , 2)
        return render_template ('/mechanic/kinematika/fallen/last_n_meter_time.html' , time=time ,Dimension='წმ')
    else:
        return render_template ('/mechanic/kinematika/fallen/last_n_meter_time.html' , time="შეუძლებელია")











#ითვლის ბოლო n-წამში გავლილი მანძილს
@app.route('/calculator/mechanic/kinematika/fallen/last_n_time_dist/calculate')
def fallen_last_n_time_dist():
    return render_template ('/mechanic/kinematika/fallen/last_n_time_dist.html')


@app.route('/calculator/mechanic/kinematika/fallen/last_n_time_dist/' ,  methods=['GET','POST'])
def get_value_last_n_time_dist():
    gravity=float(request.form['gravity'])
    velocity=float(request.form['initial_speed'])
    last_n=float(request.form['n_time'])
    time=float(request.form['time'])
  
    if time>=last_n :
        height=(velocity*last_n) + (gravity*last_n*((2*time) - last_n))/2
        height= round(height , 2)
        return render_template ('/mechanic/kinematika/fallen/last_n_time_dist.html' ,height=height ,Dimension='მ')
    else:
        return render_template ('/mechanic/kinematika/fallen/last_n_time_dist.html' , height="მოძრაობა შეუძლებელია" )






###################################################### გასროლილი სხეული დასაწყისი ######################################################
###################################################### გასროლილი სხეული დასაწყისი ######################################################
###################################################### გასროლილი სხეული დასაწყისი ######################################################
###################################################### გასროლილი სხეული დასაწყისი ######################################################




























































if __name__ == '__main__':
    app.run (debug=True)
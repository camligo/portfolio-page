class ContactFormController < ApplicationController
  def new
  end

  def create
    @name = params[:contact_form][:name]
    @email = params[:contact_form][:email]
    @message = params[:contact_form][:message]

    # Perform any necessary actions with the form data
    flash[:success] = "Your message has been sent successfully."
    redirect_to :root
  end
end

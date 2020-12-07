<template id="contact-us">
    <form class="form-container recall-form-validate">
        <h3 class="form-title">Contact Us</h3>
        <div class="form-field">
            <label for="first-name">First Name*</label>
            <input type="text" name="first-name" id="first-name" required />
        </div>
        <div class="form-field">
            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name"/>
        </div>
        <div class="form-field">
            <label for="email-input">Email*</label>
            <input type="email" name="email-input" id="email-input" required />
        </div>
        <div class="form-field">
            <label for="textarea-input">Message</label>
            <textarea name="textarea-input" id="textarea-input"></textarea>
        </div>
        <div class="form-field">
            <input type="submit" value="Submit" />
        </div>
        <p class="email-info">Our Email: <a href="mailto:cs@moneyworlddaily.com">cs@moneyworlddaily.com</a></p>
    </form>
</template>

<section class="popup">
	<div class="popup--inner">
		<a href="#" id="closePopup">+</a>
		<div class="popup--content" id="popupContentBox"></div>
	</div>
</section>
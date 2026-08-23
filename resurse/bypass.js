Java.perform(function () {
    console.log("[*] Jetpack-Safe Hooking Mechanism Initialized.");

    var ComponentActivity = Java.use("androidx.activity.ComponentActivity");
    var Intent = Java.use("android.content.Intent");

    // Hook the touch loop interaction event
    ComponentActivity.onUserInteraction.implementation = function () {
        console.log("[+] Screen tap captured! Forcing automatic bypass...");

        try {
            // Locate the Target Screen Class Reference
            var MainActivity = Java.use("com.example.mostsecureapp.MainActivity").class;
            
            // Retrieve Current Running Application Layer Context Instance
            var currentApp = Java.use("android.app.ActivityThread").currentApplication();
            var context = currentApp.getApplicationContext();
            
            // Construct and Configure the Target Intent Object Payload
            var bypassIntent = Intent.$new(context, MainActivity);
            bypassIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK.value);
            
            console.log("[+] Direct Routing Executed successfully. Loading MainActivity...");
            context.startActivity(bypassIntent);
            
        } catch (err) {
            console.log("[-] Routing Sequence Interrupted: " + err);
        }

        // Return standard execution to ensure no thread desynchronization takes place
        return this.onUserInteraction();
    };
});
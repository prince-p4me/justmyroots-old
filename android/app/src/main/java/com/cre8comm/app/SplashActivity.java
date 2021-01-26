package com.cre8comm.app;

import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class SplashActivity extends AppCompatActivity {
    Handler handler;
    Intent intent;
    Runnable runnable;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        intent = new Intent(this, MainActivity.class);
//        intent = new Intent(this, SignupActivity.class);
        runnable=new Runnable() {
            @Override
            public void run() {
                startActivity(intent);
                finish();
            }
        };
        handler = new Handler();
        handler.postDelayed(runnable,3000);

    }
}

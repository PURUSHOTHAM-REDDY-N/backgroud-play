package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import io.ionic.starter.plugins.AudioPlayerPlugin;
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AudioPlayerPlugin.class); // Register here!

        super.onCreate(savedInstanceState);
    }
}

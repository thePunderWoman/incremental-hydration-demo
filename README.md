# IncrementalHydration

This is the Angular Incremental Hydration wireframe demo. All you should need to do is install deps and you can run the app with `ng serve --no-hmr`.

## Delay code

To get the delay to work, you need to modify the `node_modules/@angular/core/packages/core/fesm2022/core.mjs` file. Make sure you also disable the angular cli cache to ensure the actual change gets picked up: `ng cache off`.

This should give you context. Search for the comment at the top, and you should be able to make these changes:

```ts
    // The `dependenciesFn` might be `null` when all dependencies within
    // a given defer block were eagerly referenced elsewhere in a file,
    // thus no dynamic `import()`s were produced.
+    const promise = new Promise((resolve) => {
+
+        if (typeof window !== 'undefined') {
+          const timeout = window.__ngDemoTimeout__ ?? 0;
+          setTimeout(() => resolve(), timeout);
+        } else {
+          resolve();
+        }
+      });

    if (!dependenciesFn) {
+        tDetails.loadingPromise = promise.then(() => {
            tDetails.loadingPromise = null;
            tDetails.loadingState = DeferDependenciesLoadingState.COMPLETE;
            pendingTasks.remove(taskId);
        });
        return tDetails.loadingPromise;
    }
    // Start downloading of defer block dependencies.
+    tDetails.loadingPromise = Promise.allSettled([promise, ...dependenciesFn()]).then((results) => {
        let failed = false;
        const directiveDefs = [];
        const pipeDefs = [];
        for (const result of results) {
            if (result.status === 'fulfilled') {
                const dependency = result.value;
+                if (!dependency) continue;
                const directiveDef = getComponentDef(dependency) || getDirectiveDef(dependency);
                if (directiveDef) {
                    directiveDefs.push(directiveDef);
```

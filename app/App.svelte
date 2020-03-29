<page>
    <actionBar title="Svelte Native App" />
    <flexboxLayout
    flexDirection="column"
    alignItems="center"
    backgroundColor="lightgray">
    <stackLayout orientation="horizontal">
      <button
        text="D 6"
        col="0"
        row="0"
        backgroundColor="red"
        on:tap={() => saveTap(6)} />
      <button
        text="D 8"
        col="1"
        row="0"
        backgroundColor="green"
        on:tap={() => saveTap(8)} />
      <button
        text="D 10"
        col="2"
        row="0"
        backgroundColor="blue"
        on:tap={() => saveTap(10)} />
    </stackLayout>
    <stackLayout orientation="horizontal">
      <button text="D 4" col="0" row="0" backgroundColor="red" />
      <button text="D 12" col="1" row="0" backgroundColor="green" />
      <button text="D 20" col="2" row="0" backgroundColor="blue" />
    </stackLayout>
  </flexboxLayout>
</page>

<script>
    let message = "Blank Svelte Native App"
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }
    .info {
        font-size: 20;
    }
</style>

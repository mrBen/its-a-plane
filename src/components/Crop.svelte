<script lang="ts">
  interface CropBox {
    part: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }

  interface Photo {
    id: string;
    image: string;
    crops: CropBox[];
  }

  interface Props {
    photo: Photo;
    part: string;
    base: string;
    alt: string;
  }

  let { photo, part, base, alt }: Props = $props();

  // The island reuses this component when one crop exercise follows another,
  // so the crop box and the image path must follow the props.
  let crop = $derived.by(() => {
    const found = photo.crops.find((c) => c.part === part);
    if (!found) throw new Error(`Photo ${photo.id}: no crop box named ${part}`);
    return found;
  });
  let src = $derived(`${base}/${photo.image}`);

  // The photos differ in size, so the crop's aspect ratio comes from the image
  // itself. 3:2 holds the layout until that image reports its real size.
  let measuredSrc = $state('');
  let measuredRatio = $state(3 / 2);

  function measure(event: Event) {
    const img = event.currentTarget as HTMLImageElement;
    if (img.naturalWidth && img.naturalHeight) {
      measuredSrc = img.getAttribute('src') ?? '';
      measuredRatio = img.naturalWidth / img.naturalHeight;
    }
  }

  let ratio = $derived(measuredSrc === src ? measuredRatio : 3 / 2);

  // background-size scales the image so that the crop box fills the element.
  // background-position moves the crop's top left corner to the element's top
  // left corner. Both come from the four percent numbers of the crop box.
  function offset(value: number, size: number): number {
    return size >= 100 ? 0 : (100 * value) / (100 - size);
  }

  let size = $derived(`${10000 / crop.width}% ${10000 / crop.height}%`);
  let position = $derived(`${offset(crop.x, crop.width)}% ${offset(crop.y, crop.height)}%`);
  let aspect = $derived((crop.width * ratio) / crop.height);
</script>

<div
  class="crop"
  role="img"
  aria-label={alt}
  style={`background-image: url('${src}'); background-size: ${size}; background-position: ${position}; aspect-ratio: ${aspect};`}
>
  <!-- The hidden image reports the size that the background needs. -->
  <img class="measure" {src} alt="" aria-hidden="true" onload={measure} />
</div>

<style>
  .crop {
    display: block;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
  }
  .measure {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
</style>

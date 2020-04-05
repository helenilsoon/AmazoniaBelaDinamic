<!DOCTYPE html>
<html>
<head>
	<title>Cores</title>
<style type="text/css">
	.container{	display: flex;
				flex-wrap: wrap;
		}
	.cores{width: 20%;height:100px; text-align: center;line-height: 100px;color:#FFF;margin: 1px;}
</style>
</head>
<body>
	<div class="container">
		<div class="cores" style="background: #Ff5402;">#Ff5402	</div>
		<div class="cores" style="background: #0099FF;">#0099FF	</div>
		<div class="cores" style="background: #016701;">#016701	</div>
		<div class="cores" style="background: #FCFD01;">#FCFD01	</div>
		<div class="cores" style="background: #13160f;">#13160f	</div>
		<div class="cores" style="background: #AE0001;">#AE0001	</div>
		<div class="cores" style="background: #3B265E;">#3B265E	</div>
		<div class="cores" style="background: #016100;">#016100	</div>
		<div class="cores" style="background: #698C00;">#698C00	</div>
		<div class="cores" style="background: #E0D53F;">#E0D53F	</div>
		<div class="cores" style="background: #0D524F;">#0D524F	</div>
		
	</div>




	  <h3>My Google Maps Demo</h3>
    <!--The div element for the map -->
    <div id="map"></div>
    <script type="text/javascript">
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

</script>

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMF06wPXIiG93NRyu9oHe9R2MOUO88bds&callback=initMap">
</script>

</body>
</html>
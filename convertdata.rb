require 'json'
require 'pry'

thefile = File.read('./latlongv1.json')
data_hash = JSON.parse(thefile)
my_new_hash = Hash.new
data_hash.each do |e|
  key = e["SSR Permit Number"]
  value = [e["Latitude"],e["Longitude"]]
  my_new_hash[key] = value
end
File.open("./latlonglookup.json","w") do |f|
  f.write(my_new_hash.to_json)
end


export const courts = [
  {
    id: "1",
    name: "Northwest Tennis Center",
    lat: 29.507, lng: -98.573,
    address: "123 Northwest Ave",
    surface: "Hard",
    lighting: true,
    open_hours: "6:00 AM - 10:00 PM",
    is_closed: false,
    traffic_level: "High",
    scheduled: [
      { user: "Helena", time: "3:30 PM - 5:00 PM" },
      { user: "emberecho", time: "4:00 PM - 5:30 PM" },
      { user: "lunavoyager", time: "6:00 PM - 7:30 PM" },
    ]
  },
  {
    id: "2",
    name: "American Tennis Center",
    lat: 29.515, lng: -98.59,
    address: "45 American St",
    surface: "Clay",
    lighting: true,
    open_hours: "7:00 AM - 9:00 PM",
    is_closed: false,
    traffic_level: "Medium",
    scheduled: [{ user: "Daniel", time: "3:00 PM - 4:30 PM" }]
  },
  {
    id: "3",
    name: "Lost Woods Center",
    lat: 29.498, lng: -98.565,
    address: "7 Lost Woods Rd",
    surface: "Hard",
    lighting: false,
    open_hours: "Sunrise - Sunset",
    is_closed: false,
    traffic_level: "Low",
    scheduled: []
  }
];

import math

def calculate_angle(x1, y1, x2, y2):
    delta_x = x2 - x1
    delta_y = y2 - y1
    angle_rad = math.atan2(delta_y, delta_x)
    angle_deg = math.degrees(angle_rad)
    return angle_deg

def calculate_distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

def calculate_travel_time(x1, y1, x2, y2, speed):
    angle_deg = calculate_angle(x1, y1, x2, y2)
    distance = calculate_distance(x1, y1, x2, y2)
    time = distance / speed
    return angle_deg, time

# Example usage
x1, y1 = 2447, -4893
x2, y2 = 1807, -4412
speed = 7.127  # units per second
angle_deg, travel_time = calculate_travel_time(x1, y1, x2, y2, speed)

print(f"Angle: {angle_deg:.2f} degrees")
print(f"Travel Time: {travel_time:.2f} seconds")

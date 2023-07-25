import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None and diameter is not None:
            raise ValueError("Only one of radius or diameter should be specified")
        if radius is not None:
            self.radius = radius
            self.diameter = self.radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter should be specified")

    def area(self) -> float:
        return round(math.pi * self.radius**2, 3)
    
    def __str__(self) -> str:
        return f"Circle with radius: {self.radius}"
    
    def __add__(self, other: 'Circle') -> 'Circle':
        if not isinstance(other, Circle):
             raise TypeError(f"Unsupported operand type for +: 'Circle' and '{type(other).__name__}'")
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other: 'Circle') -> bool:
        if not isinstance(other, Circle):
            raise TypeError(f"unorderable types: Circle() < {type(other).__name__}")
        return self.radius < other.radius

    def __eq__(self, other: 'Circle') -> bool:
        if not isinstance(other, Circle):
            return False
        return self.radius == other.radius


# Create circles
circle1 = Circle(radius=50)
circle2 = Circle(radius=75)
circle3 = Circle(diameter=60)

# Print area of circles
print(circle1.area())
print(circle2.area())

# Add circles and print the result
circle4 = circle1 + circle2
print(circle4)

# Compare circles
print(circle1 == circle2)
print(circle1 == Circle(radius=50))
print(circle1 > circle2)

# Sort circles
circles = [circle1, circle2, circle3]
sorted_circles = sorted(circles)
for circle in sorted_circles:
    print(circle)


# Initialize the Turtle
screen = turtle.Screen()
screen.title("Sorted Circles")
screen.setup(800, 400)
turtle.hideturtle()
turtle.speed(0)

# Function to draw a circle
def draw_circle(circle):
    turtle.penup()
    turtle.goto(circle.radius, 0)
    turtle.pendown()
    turtle.circle(circle.radius)

# Draw the sorted circles
for circle in sorted_circles:
    draw_circle(circle)

# Close the Turtle graphics window on click
turtle.done()

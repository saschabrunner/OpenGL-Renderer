#version 330 core
in vec3 vertexColor;
in vec2 vertexTexCoord;

out vec4 color;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main()
{
    color = mix(texture(texture1, vertexTexCoord), texture(texture2, vertexTexCoord), 0.2);
}
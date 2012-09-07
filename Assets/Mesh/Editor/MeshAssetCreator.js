#pragma strict

@MenuItem("Custom/Assets/Create Mesh (Boid)")
static function CreateBoidMesh() {
    var mesh = Mesh();
    mesh.vertices = [
        Vector3(0, 0, 1),
        Vector3(0.5, 0, -1),
        Vector3(-0.5, 0, -1)
    ];
    mesh.SetIndices([0, 1, 2, 0], MeshTopology.LineStrip, 0);
    mesh.RecalculateBounds();

    AssetDatabase.CreateAsset(mesh, "Assets/Mesh/Boid.asset");
    AssetDatabase.Refresh();
}

@MenuItem("Custom/Assets/Create Mesh (Quad)")
static function CreateQuadMesh() {
    var mesh = Mesh();
    mesh.vertices = [
        Vector3(-1, -1, 0),
        Vector3( 1, -1, 0),
        Vector3(-1,  1, 0),
        Vector3( 1,  1, 0)
    ];
    mesh.normals = [
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0,  1)
    ];
    mesh.uv = [
        Vector2(1, 0),
        Vector2(0, 0),
        Vector2(1, 1),
        Vector2(0, 1)
    ];
    mesh.SetIndices([0, 1, 2, 3], MeshTopology.TriangleStrip, 0);
    mesh.RecalculateBounds();

    AssetDatabase.CreateAsset(mesh, "Assets/Mesh/Quad.asset");
    AssetDatabase.Refresh();
}

@MenuItem("Custom/Assets/Create Mesh (Two-Sided Quad)")
static function CreateQuad2Mesh() {
    var mesh = Mesh();
    mesh.vertices = [
        Vector3(-1, -1, 0),
        Vector3( 1, -1, 0),
        Vector3(-1,  1, 0),
        Vector3( 1,  1, 0),
        Vector3( 1,  1, 0),
        Vector3( 1, -1, 0),
        Vector3(-1,  1, 0),
        Vector3(-1, -1, 0)
    ];
    mesh.normals = [
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0,  1),
        Vector3(0, 0, -1),
        Vector3(0, 0, -1),
        Vector3(0, 0, -1),
        Vector3(0, 0, -1)
    ];
    mesh.uv = [
        Vector2(0, 0),
        Vector2(1, 0),
        Vector2(0, 1),
        Vector2(1, 1),
        Vector2(1, 1),
        Vector2(1, 0),
        Vector2(0, 1),
        Vector2(0, 0)
    ];
    mesh.SetIndices([0, 1, 2, 3, 4, 5, 6, 7], MeshTopology.TriangleStrip, 0);
    mesh.RecalculateBounds();

    AssetDatabase.CreateAsset(mesh, "Assets/Mesh/Quad2.asset");
    AssetDatabase.Refresh();
}

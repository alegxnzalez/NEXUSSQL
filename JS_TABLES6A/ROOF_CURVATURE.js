// ROOF_CURVATURE.js

window.ROOF_CURVATURE = {
  "tables": {
    "ROOF_CURVATURE": {
      "columns": {
        "ROOF_CURVATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ROOF_CURVATURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CURVE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "CURVE_HEIGHT",
        "EQUIPMENT_GROUP",
        "EQUIPMENT_GROUP_COMPARTMENT"
      ]
    }
  }
};

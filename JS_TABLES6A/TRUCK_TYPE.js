// TRUCK_TYPE.js

window.TRUCK_TYPE = {
  "tables": {
    "TRUCK_TYPE": {
      "columns": {
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
        },
        "TRUCK_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "An unique identifier for the Truck Type. "
        },
        "TRUCK_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "An unique identifier for the Truck Type except the domain portion. "
        },
        "TRUCK_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the Truck."
        },
        "ROOF_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TRAILER_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ALLOW_SIDE_OVERHANG": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "ALLOW_REAR_OVERHANG": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": [
        "EQUIPMENT_GROUP",
        "TRUCK_TYPE_EDE_MAPPING"
      ]
    }
  }
};

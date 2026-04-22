// TRUCK_TYPE_EDE_MAPPING.js

window.TRUCK_TYPE_EDE_MAPPING = {
  "tables": {
    "TRUCK_TYPE_EDE_MAPPING": {
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
          "nullable": true,
          "foreign_key": "TRUCK_TYPE",
          "info": "An unique identifier to define the type of the Truck. This column is seeded with commonly used truck types(Light Delivery Truck, Light Delivery Van, Straight Box Truck - Light, Straight Box Truck - Heavy, Straight Flatbed Truck, Dromedary , Pony Trailer and Semi-Trailer) however user can add additional truck types. "
        },
        "ENGINE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "An Identifier to define the type of the EDE or ESE that contains Vendor name with the name of the Engine. "
        },
        "EDE_VEHICLE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Type of the Vehicle Say Truck, Car etc. "
        },
        "TRUCK_EDE_MAPPING_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "An unique sequence based identifier."
        }
      },
      "fk_tables": []
    }
  }
};

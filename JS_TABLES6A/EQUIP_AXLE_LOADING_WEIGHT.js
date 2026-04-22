// EQUIP_AXLE_LOADING_WEIGHT.js

window.EQUIP_AXLE_LOADING_WEIGHT = {
  "tables": {
    "EQUIP_AXLE_LOADING_WEIGHT": {
      "columns": {
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The  GID for the equipment group where the axle weight is being defined. \nOTM uses equipment status to indicate feasibility. The status type is AXLE_WEIGHT_FEASIBILITY and the statuses are AXLE_WEIGHT_FEASIBILITY_FEASIBLE and AXLE_WEIGHT_FEASIBILITY_INFEASIBLE respectively to indicate feasibility and infeasibility. "
        },
        "AXLE_SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The axle sequence number. "
        },
        "AXLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "User-specified name for the axle where the distance and max weight are defined, such as front axle or rear axle. "
        },
        "AXLE_DISTANCE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The distance from the nose of the equipment where the max weight can be loaded. "
        },
        "AXLE_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure qualification (e.g., inches, meters) for the axle distance. "
        },
        "AXLE_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Axle distance in the base unit of measure. "
        },
        "MAX_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The max loading weight allowed. "
        },
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure qualification (e.g., pounds, kilogram ) for the axle maximum weight. "
        },
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Axle maximum weight in the base weight unit of measure. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Axle distance in the base unit of measure. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};

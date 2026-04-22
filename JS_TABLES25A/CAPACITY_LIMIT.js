// CAPACITY_LIMIT.js

window.CAPACITY_LIMIT = {
  "tables": {
    "CAPACITY_LIMIT": {
      "columns": {
        "CAPACITY_LIMIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique Identifier for Capacity Limit records. This is a combination of "
        },
        "CAPACITY_LIMIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CAPACITY_GROUP",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "A unique identifier to define and group the equipments within the system. The gid contains the domain portion. "
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "A unique identifier to define the X lanes in the GC3. The gid contains the domain portion. The X-Lane is the user interface in GC3 to define all the lanes. "
        },
        "TIME_PERIOD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TIME_PERIOD_TYPE"
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "SUN_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "MON_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "TUE_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "WED_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "THU_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "FRI_LIMIT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "SAT_LIMIT": {
          "type": "NUMBER(10)",
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
        },
        "CAPACITY_LIMIT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CAPACITY_LIMIT_GROUP"
        },
        "RESERVATION_NUM": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A unique number assigned to the blocks on a unit train. "
        },
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "Defines the relation between Route Code and Reservation Number."
        }
      },
      "fk_tables": [
        "CAPACITY_USAGE"
      ]
    }
  }
};

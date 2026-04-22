// CAPACITY_USAGE.js

window.CAPACITY_USAGE = {
  "tables": {
    "CAPACITY_USAGE": {
      "description": "Store a service provider's capacity usage by  capacity group, equipment type, lane and time period",
      "columns": {
        "CAPACITY_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for Capacity Usage. This consists of the XID and the Domain Name"
},
        "CAPACITY_USAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "CAPACITY_LIMIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CAPACITY_LIMIT",
          "info": "Unique Identifier for Capacity Limit records. This is a combination of CAPACITY_LIMIT_XID and DOMAIN_NAME"
},
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CAPACITY_GROUP",
          "info": "Unique Identifier for each CAPCITY GROUP. This is a combination of XID and Domain Name"
},
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "A unique identifier to define and group the equipments within the system. The gid contains the domain portion."
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "A unique identifier to define the X lanes in the GC3. The gid contains the domain portion. The X-Lane is the user interface in GC3 to define all the lanes."
},
        "START_DATE": {
          "type": "DATE",
          "nullable": false
},
        "END_DATE": {
          "type": "DATE",
          "nullable": false
},
        "LIMIT": {
          "type": "NUMBER(10)",
          "nullable": false
},
        "USAGE": {
          "type": "NUMBER(10)",
          "nullable": false
},
        "IS_OVERRIDE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
          "info": "Value copied from Reservation Number in capacity limit while planning."
},
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "Value copied from Route Code GID in capacity limit while planning."
}
      },
      "fk_tables": [
        "SHIPMENT_S_EQUIPMENT_JOIN"
]
    }
  }
};
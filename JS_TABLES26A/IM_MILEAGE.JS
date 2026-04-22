// IM_MILEAGE.js

window.IM_MILEAGE = {
  "tables": {
    "IM_MILEAGE": {
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "I_TRANS_NO": {
          "type": "NUMBER",
          "nullable": false
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_DISTANCE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "TRANSCATION_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion."
},
        "SOURCE_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "SOURCE_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "SOURCE_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true
},
        "SOURCE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "SOURCE_ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "SOURCE_ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "SOURCE_ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "SOURCE_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion."
},
        "DEST_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "DEST_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "DEST_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true
},
        "DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DEST_ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "DEST_ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "DEST_ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "DEST_ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "DEST_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DISTANCE_VALUE": {
          "type": "NUMBER",
          "nullable": true
},
        "DISTANCE_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "DISTANCE_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "DISTANCE_VALUE in base units."
},
        "IS_LOADED": {
          "type": "VARCHAR2(1)",
          "nullable": false
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
      "fk_tables": []
    }
  }
};
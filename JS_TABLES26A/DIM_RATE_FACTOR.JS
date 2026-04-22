// DIM_RATE_FACTOR.js

window.DIM_RATE_FACTOR = {
  "tables": {
    "DIM_RATE_FACTOR": {
      "description": "Holds weight and volume information, that can either be associated with a contract (RATE_OFFERING) or a lane (RATE_GEO).",
      "columns": {
        "DIM_RATE_FACTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DIM_RATE_FACTOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "UNIT_1": {
          "type": "NUMBER",
          "nullable": false
},
        "UNIT_1_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "UNIT_1_UOM_CLASS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "W",
                    "V",
                    "D",
                    "U",
                    "S",
                    "T",
                    "L"
          ],
          "info": "W = Weight,V = Volume,D = Distance,U = Duration,S = Speed,T = Temperator,L = Length"
},
        "UNIT_2": {
          "type": "NUMBER",
          "nullable": false
},
        "UNIT_2_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "UNIT_2_UOM_CLASS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "W",
                    "V",
                    "D",
                    "U",
                    "S",
                    "T",
                    "L"
          ],
          "info": "W = Weight,V = Volume,D = Distance,U = Duration,S = Speed,T = Temperator,L = Length"
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
        "ACCESSORIAL_COST",
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "RATE_GEO",
        "RATE_GEO_COST",
        "RATE_OFFERING"
]
    }
  }
};
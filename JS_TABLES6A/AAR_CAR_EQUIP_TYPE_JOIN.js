// AAR_CAR_EQUIP_TYPE_JOIN.js

window.AAR_CAR_EQUIP_TYPE_JOIN = {
  "tables": {
    "AAR_CAR_EQUIP_TYPE_JOIN": {
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
        "AAR_CAR_EQUIP_TYPE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "DB sequence used as PK "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "OTM Equipment Type "
        },
        "AAR_CAR_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "info": "AAR Car Type "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Equipment Initial "
        },
        "EQUIPMENT_NUMBER_LOW": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Equipment Number Range-Lower Limit "
        },
        "EQUIPMENT_NUMBER_HIGH": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Equipment Number Range-Upper Limit "
        },
        "EQUIPMENT_OWNER_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "C",
            "P"
          ],
          "info": "The Type of Owner for this Equipment Type. C = Carrier Owned, P = Private, null = All"
        }
      },
      "fk_tables": []
    }
  }
};

// SKU.js

window.SKU = {
  "tables": {
    "SKU": {
      "columns": {
        "SKU_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true
},
        "SKU_XID": {
          "type": "VARCHAR2(150)",
          "nullable": false
},
        "SKU_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "WAREHOUSE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION"
},
        "SUPPLIER_CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION"
},
        "OWNER_CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CORPORATION"
},
        "SHIP_UNIT_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "LAST_INVENTORY_DATE": {
          "type": "DATE",
          "nullable": true
},
        "AVERAGE_AGE": {
          "type": "NUMBER",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the sku."
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the sku."
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the sku."
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the sku."
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the sku."
},
        "SKU_OBJECT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
                    "PACKAGED ITEM",
                    "EQUIPMENT",
                    "POWER UNIT",
                    "DRIVER"
          ],
          "info": "Is either Packaged_Item or one of the assets i.e.Equipment, Ancillary_Equipment, Power_Unit, Driver."
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A boolean field.  When it is set to 'Y', this row and its child data will be purged."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true
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
        "SKU_COST",
        "SKU_DESCRIPTOR",
        "SKU_EVENT",
        "SKU_INVOLVED_PARTY",
        "SKU_LEVEL",
        "SKU_QUANTITY",
        "SKU_STATUS",
        "SKU_TEXT"
]
    }
  }
};
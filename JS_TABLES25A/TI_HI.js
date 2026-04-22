// TI_HI.js

window.TI_HI = {
  "tables": {
    "TI_HI": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
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
          "info": "Date and time of the most recent data update. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The internal sequence number for each entry entered for package item, packing unit, transport handling unit, layers, and quantity per layer. "
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The GID for the package item that is having the TiHi information defined for a specific transport handling unit. TiHi refers to the number of boxes/cartons stored on a layer or tier (the Ti), and the number of layers high (how high) that these will be stacked on the transport handing unit e.g., a pallet. It can also be used in reference to the stacking pattern used to load a pallet in order to generate a relatively stable stack. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the package unit. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the transport unit for the TiHi information being defined. "
        },
        "NUM_LAYERS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of layers high. For example, if a transport handling unit of a pallet can hold 24 cases - 4 layers with a quantity of 6 per layer the number of layers value is 4. "
        },
        "QUANTITY_PER_LAYER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of items per layer.  For example, if a transport handling unit of a pallet can hold 24 cases - 4 layers with a quantity of 6 per layer the quantity per layer is 6."
        }
      },
      "fk_tables": []
    }
  }
};

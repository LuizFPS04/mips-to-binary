import { InstructionMips, TRegisters } from '../types/mipsTypes';

export const instructions: { [key: string]: InstructionMips } = {
    lb: {
        mnemonic: "lb",
        format: "I",
        encoding: {
            opCode: "100000",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lh: {
        mnemonic: "lh",
        format: "I",
        encoding: {
            opCode: "100001",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lwl: {
        mnemonic: "lwl",
        format: "I",
        encoding: {
            opCode: "100010",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lw: {
        mnemonic: "lw",
        format: "I",
        encoding: {
            opCode: "100011",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lbu: {
        mnemonic: "lbu",
        format: "I",
        encoding: {
            opCode: "100100",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lhu: {
        mnemonic: "lhu",
        format: "I",
        encoding: {
            opCode: "100101",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lwr: {
        mnemonic: "lwr",
        format: "I",
        encoding: {
            opCode: "100110",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    sb: {
        mnemonic: "sb",
        format: "I",
        encoding: {
            opCode: "101000",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    sh: {
        mnemonic: "sh",
        format: "I",
        encoding: {
            opCode: "101001",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    swl: {
        mnemonic: "swl",
        format: "I",
        encoding: {
            opCode: "101010",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    sw: {
        mnemonic: "sw",
        format: "I",
        encoding: {
            opCode: "101011",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    swr: {
        mnemonic: "swr",
        format: "I",
        encoding: {
            opCode: "101110",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    add: {
        mnemonic: "add",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100000"
        }
    },
    addu: {
        mnemonic: "addu",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100001"
        }
    },
    sub: {
        mnemonic: "sub",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100010"
        }
    },
    subu: {
        mnemonic: "subu",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100011"
        }
    },
    and: {
        mnemonic: "and",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100100"
        }
    },
    or: {
        mnemonic: "or",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100101"
        }
    },
    xor: {
        mnemonic: "xor",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100110"
        }
    },
    nor: {
        mnemonic: "nor",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "100111"
        }
    },
    slt: {
        mnemonic: "slt",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "101010"
        }
    },
    sltu: {
        mnemonic: "sltu",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "101011"
        }
    },
    addi: {
        mnemonic: "addi",
        format: "I",
        encoding: {
            opCode: "001000",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    addiu: {
        mnemonic: "addiu",
        format: "I",
        encoding: {
            opCode: "001001",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    slti: {
        mnemonic: "slti",
        format: "I",
        encoding: {
            opCode: "001010",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    sltiu: {
        mnemonic: "sltiu",
        format: "I",
        encoding: {
            opCode: "001011",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    andi: {
        mnemonic: "andi",
        format: "I",
        encoding: {
            opCode: "001100",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    ori: {
        mnemonic: "ori",
        format: "I",
        encoding: {
            opCode: "001101",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    xori: {
        mnemonic: "xori",
        format: "I",
        encoding: {
            opCode: "001110",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    lui: {
        mnemonic: "lui",
        format: "I",
        encoding: {
            opCode: "001111",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    sll: {
        mnemonic: "sll",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "000000"
        }
    },
    srl: {
        mnemonic: "srl",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "000010"
        }
    },
    sra: {
        mnemonic: "sra",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "000011"
        }
    },
    sllv: {
        mnemonic: "sllv",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "000011"
        }
    },
    srlv: {
        mnemonic: "srlv",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "000110"
        }
    },
    srav: {
        mnemonic: "srav",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "000111"
        }
    },
    mfhi: {
        mnemonic: "mfhi",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "010000"
        }
    },
    mthi: {
        mnemonic: "mthi",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "010001"
        }
    },
    mflo: {
        mnemonic: "mflo",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "010010"
        }
    },
    mtlo: {
        mnemonic: "mtlo",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "010011"
        }
    },
    mult: {
        mnemonic: "mult",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "011000"
        }
    },
    multu: {
        mnemonic: "multu",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "011001"
        }
    },
    div: {
        mnemonic: "div",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "011010"
        }
    },
    divu: {
        mnemonic: "divu",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "011011"
        }
    },
    jr: {
        mnemonic: "jr",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "001000"
        }
    },
    jalr: {
        mnemonic: "jalr",
        format: "R",
        encoding: {
            opCode: "000000",
            rs: 5,
            rt: 5,
            rd: 5,
            shamt: "00000",
            func: "001001"
        }
    },
    bltz: {
        mnemonic: "bltz",
        format: "I",
        encoding: {
            opCode: "001000",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    bgez: {
        mnemonic: "bgez",
        format: "I",
        encoding: {
            opCode: "001000",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    bltzal: {
        mnemonic: "bltzal",
        format: "I",
        encoding: {
            opCode: "000001",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    bgezal: {
        mnemonic: "bgezal",
        format: "I",
        encoding: {
            opCode: "001000",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    j: {
        mnemonic: "j",
        format: "J",
        encoding: {
            opCode: "000010",
            immediate: 26
        }
    },
    jal: {
        mnemonic: "jal",
        format: "J",
        encoding: {
            opCode: "000011",
            immediate: 26
        }
    },
    beq: {
        mnemonic: "beq",
        format: "I",
        encoding: {
            opCode: "000100",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    bne: {
        mnemonic: "bne",
        format: "I",
        encoding: {
            opCode: "000101",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    blez: {
        mnemonic: "blez",
        format: "I",
        encoding: {
            opCode: "000110",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    },
    bgtz: {
        mnemonic: "bgtz",
        format: "I",
        encoding: {
            opCode: "000111",
            rs: 5,
            rt: 5,
            immediate: 16
        }
    }
};

export const registers: TRegisters = {
    $zero: "00000",
    $at: "00001",
    $v0: "00010",
    $v1: "00011",
    $a0: "00100",
    $a1: "00101",
    $a2: "00110",
    $a3: "00111",
    $t0: "01000",
    $t1: "01001",
    $t2: "01010",
    $t3: "01011",
    $t4: "01100",
    $t5: "01101",
    $t6: "01110",
    $t7: "01111",
    $s0: "10000",
    $s1: "10001",
    $s2: "10010",
    $s3: "10011",
    $s4: "10100",
    $s5: "10101",
    $s6: "10110",
    $s7: "10111",
    $t8: "11000",
    $t9: "11001",
    $k0: "11010",
    $k1: "11011",
    $gp: "11100",
    $sp: "11101",
    $s8: "11110",
    $ra: "11111"
}